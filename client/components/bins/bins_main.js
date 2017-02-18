import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import BinsEditor from './bins_editor';
import BinsViewer from './bins_viewer';
import BinsShare from './bins_share';

class BinsMain extends Component {
    render() {
        // Check if this.props.bin is available if not render Loading div
        if (!this.props.bin) {
            return <divi>Loading...</divi>;
        }

        return(
          <div>
              <BinsEditor bin={this.props.bin} />
              <BinsViewer bin={this.props.bin} />
              <BinsShare bin={this.props.bin} />
          </div>
        );
    }
}

export default createContainer((props) => {
    const { binId } = props.params;
    Meteor.subscribe('bins');
    Meteor.subscribe('sharedBins');

    // the return will send this.props.bin to pass it down to BinsEditor
    return { bin: Bins.findOne(binId) };
}, BinsMain);
