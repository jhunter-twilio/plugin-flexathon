import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';
import { loadCustomCRMContainer } from './components/examples/CRMContainer'
import reducers, { namespace } from './states';

const PLUGIN_NAME = 'FlexathonPlugin';

export default class FlexathonPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    this.registerReducers(manager);

    //flex.TaskListItem.defaultProps.itemSize = "LargeSelected"
    //manager.strings.TaskExtraInfo = `<h1>This is my extra info</h1><h2>{{task.attributes.callType}}</h2>`

    loadCustomCRMContainer.bind(this)(flex, manager);

  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
