/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AppConfig, JsonObject } from '@backstage/config';
import {
  defaultAppComponents,
  defaultAppIcons,
  defaultAppThemes,
} from '@backstage/core-components';
import { BrowserRouter } from 'react-router-dom';
import { PrivateAppImpl } from './App';
import { AppThemeProvider } from './AppThemeProvider';
import { defaultApis } from './defaultApis';
import { AppConfigLoader, AppOptions } from './types';
import { AppComponents, BackstagePlugin } from '@backstage/core-plugin-api';

const REQUIRED_APP_COMPONENTS: Array<keyof AppComponents> = [
  'Progress',
  'NotFoundErrorPage',
  'BootErrorPage',
  'ErrorBoundaryFallback',
];

/**
 * The default config loader, which expects that config is available at compile-time
 * in `process.env.APP_CONFIG`. APP_CONFIG should be an array of config objects as
 * returned by the config loader.
 *
 * It will also load runtime config from the __APP_INJECTED_RUNTIME_CONFIG__ string,
 * which can be rewritten at runtime to contain an additional JSON config object.
 * If runtime config is present, it will be placed first in the config array, overriding
 * other config values.
 */
export const defaultConfigLoader: AppConfigLoader = async (
  // This string may be replaced at runtime to provide additional config.
  // It should be replaced by a JSON-serialized config object.
  // It's a param so we can test it, but at runtime this will always fall back to default.
  runtimeConfigJson: string = '__APP_INJECTED_RUNTIME_CONFIG__',
) => {
  const appConfig = process.env.APP_CONFIG;
  if (!appConfig) {
    throw new Error('No static configuration provided');
  }
  if (!Array.isArray(appConfig)) {
    throw new Error('Static configuration has invalid format');
  }
  const configs = appConfig.slice() as unknown as AppConfig[];

  // Avoiding this string also being replaced at runtime
  if (
    runtimeConfigJson !==
    '__app_injected_runtime_config__'.toLocaleUpperCase('en-US')
  ) {
    try {
      const data = JSON.parse(runtimeConfigJson) as JsonObject;
      if (Array.isArray(data)) {
        configs.push(...data);
      } else {
        configs.push({ data, context: 'env' });
      }
    } catch (error) {
      throw new Error(`Failed to load runtime configuration, ${error}`);
    }
  }

  const windowAppConfig = (window as any).__APP_CONFIG__;
  if (windowAppConfig) {
    configs.push({
      context: 'window',
      data: windowAppConfig,
    });
  }
  return configs;
};

/**
 * Creates a new Backstage App.
 */
export function createApp(options?: AppOptions) {
  const missingRequiredComponents = REQUIRED_APP_COMPONENTS.filter(
    name => !options?.components?.[name],
  );
  if (missingRequiredComponents.length > 0) {
    // eslint-disable-next-line no-console
    console.warn(
      'DEPRECATION WARNING: The createApp options will soon require a minimal set of ' +
        'components to be provided in the components option. These components can be ' +
        'created using defaultAppComponents from @backstage/core-components and ' +
        'passed along like this: createApp({ components: defaultAppComponents() }). ' +
        `The following components are missing: ${missingRequiredComponents.join(
          ', ',
        )}`,
    );
  }

  const appIcons = defaultAppIcons();
  const providedIconKeys = Object.keys(options?.icons ?? {});
  const missingIconKeys = Object.keys(appIcons).filter(
    key => !providedIconKeys.includes(key),
  );
  if (missingIconKeys.length > 0) {
    // eslint-disable-next-line no-console
    console.warn(
      'DEPRECATION WARNING: The createApp options will soon require all app icons to be provided.' +
        'These icons can be created using defaultAppIcons from @backstage/core-components ' +
        'and then passed along like this: createApp({ icons: ...defaultAppIcons() })' +
        `The following icons are missing: ${missingIconKeys.join(', ')}`,
    );
  }

  if (!options?.themes) {
    // eslint-disable-next-line no-console
    console.warn(
      'DEPRECATION WARNING: The createApp options will soon require themes to be provided. ' +
        'Themes can be created using defaultAppThemes from @backstage/core-components ' +
        'and then passed along like this: createApp({ theme: defaultAppThemes() })',
    );
  }

  const apis = options?.apis ?? [];
  const plugins = options?.plugins ?? [];
  const components = {
    ...defaultAppComponents(),
    Router: BrowserRouter,
    ThemeProvider: AppThemeProvider,
    ...options?.components,
  };
  const configLoader = options?.configLoader ?? defaultConfigLoader;

  return new PrivateAppImpl({
    apis,
    icons: { ...appIcons, ...options?.icons },
    plugins: plugins as BackstagePlugin<any, any>[],
    components,
    themes: options?.themes ?? defaultAppThemes(),
    configLoader,
    defaultApis,
    bindRoutes: options?.bindRoutes,
  });
}
