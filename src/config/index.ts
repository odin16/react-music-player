import dev from './dev';
import prod from './prop';

const configForStage: Partial<EnvironmentConfig> = process.env.NODE_ENV === 'production' ? prod : dev;
const commons: Partial<EnvironmentConfig> = {
  API_URL: 'https://rubytify.herokuapp.com/api/v1'
};

const config: Partial<EnvironmentConfig> = {
  ...commons,
  ...configForStage
};

export default config;
