import { EnhancerOptions } from 'redux-devtools-extension';
import { StateType, ActionType } from 'typesafe-actions';

declare global {
  interface EnvironmentConfig {
    REDUX_DEV_TOOLS: EnhancerOptions;
    API_URL: string;
    PLAYER: {
      initialVolume: number;
      maxVolume: number;
      volumeIncrement: number;
    };
  }

  type Store = StateType<typeof import('@app/redux').default>;
  type RootAction = ActionType<typeof import('@app/redux/actions').default>;
  type RootState = StateType<typeof import('@app/redux').rootReducer>;
}

export {};
