import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import CustomTaskListContainer from './components/CustomTaskList/CustomTaskList.Container';
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

    flex.CRMContainer.defaultProps.uriCallback = (task) => task
      ? `https://www.bing.com/search?q=${task.attributes.name}`
      : "http://bing.com"

    flex.TaskListItem.defaultProps.itemSize = "LargeSelected"
    manager.strings.TaskExtraInfo = "This is my extra info"
    manager.strings.TaskInfoPanelContent = `<h1>TASK CONTEXT</h1>
    <h2>Task type</h2>
    <p>{{task.channelType}}</p>
    <h2>Task created on</h2>
    <p>{{task.dateCreated}}</p>
    <h2>Task priority</h2>
    <p>{{task.priority}}</p>
    <h2>Task queue</h2>
    <p>{{task.queueName}}</p>
    <h2>Task Sid</h2>
    <p>{{task.taskSid}}</p>
    <h2>Reservation Sid</h2>
    <p>{{task.sid}}</p>
    <hr />
    <h1>CALL TYPE</h1>
    <h2>{{task.attributes.callType}}</h2>
    <h1>CUSTOMER CONTEXT</h1>
    <h2>Customer name / phone number</h2>
    <p>{{task.defaultFrom}}</p>
    <h2>Country</h2>
    <p>{{task.attributes.caller_country}}</p>
    <hr />
    <h1>ADDONS</h1>
    <p>
        No add-ons enabled.
        To expand your experience, visit
    </p>
    <a href="https://www.twilio.com/marketplace/add-ons" target="blank">Twilio Marketplace</a>`

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
