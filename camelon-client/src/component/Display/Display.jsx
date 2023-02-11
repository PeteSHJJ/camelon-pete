import React from 'react'
import './Display.scss'
import Overview from './Mode/Overview';
import Pinmap from './Mode/Pinmap';
import Heatmap from './Mode/Heatmap';
function Display(props) {

    if (props.data == "overview") {
        var display = <><Overview /></>;
      } else if (props.data == "pin_map") {
        var display = <><Pinmap /></>;
      } else if (props.data == "heat_map") {
        var display= <><Heatmap /></>;
      }

      return (
        <div className="display-container">
            {display}
        </div>
      );
}

export default Display