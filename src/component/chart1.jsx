import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
 
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
export default class Chart extends Component {	
	render() {
		const options = {
            title: {
              text: "Overview"
            },
            data: [{				
              type: "column",
              dataPoints: [
                { label: "Jan",  y: 0  },
                { label: "Feb", y: 0  },
                { label: "Mar", y: 0  },
                { label: "Apr",  y: 0  },
                { label: "May",  y: 0  },
                { label: "Jun", y: 0  },
                { label: "Jul", y: 10  },
                { label: "Aug",  y: 90  },
                { label: "Sep",  y:  10 },
                { label: "Oct", y: 0 },
                { label: "Nov", y: 0  },
                { label: "Dec",  y: 0  },
                { label: "",  y: 0  }
              ]
            }]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/>
		</div>
		);
	}
}
 
