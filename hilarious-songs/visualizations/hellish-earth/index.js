import React from 'react';
import { AreaChart, BarChart, PieChart,LineChart} from "nr1";
 
import { Grid, GridItem } from "nr1";
 
const index = () => {
  return (
    <div className="heading">
      <grid>
<AreaChart
            accountId={4391334}
            query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDM5MTMzNHxJTkZSQXxOQXwyODM5NzcxOTg3MTc3MDIxNTcw') TIMESERIES AUTO"
            fullWidth
          />

<GridItem columnSpan={6}>
<PieChart
          accountId={4391334}
          query="SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDM5MTMzNHxJTkZSQXxOQXwyODM5NzcxOTg3MTc3MDIxNTcw') TIMESERIES AUTO SINCE 30 minutes ago UNTIL now"
          fullWidth
          />
</GridItem>

<GridItem columnSpan = {6}>
          <BarChart
            accountId={4391334}
            query="SELECT average(cpuPercent) AS `CPU used %` FROM SystemSample WHERE (entityGuid = 'NDM5MTMzNHxJTkZSQXxOQXwyODM5NzcxOTg3MTc3MDIxNTcw') TIMESERIES AUTO"
            fullWidth
          />
        </GridItem>

        <GridItem columnSpan = {6}>
          <LineChart
            accountId={4391334}
            query="SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDM5MTMzNHxJTkZSQXxOQXwyODM5NzcxOTg3MTc3MDIxNTcw') TIMESERIES AUTO"
            fullWidth
          />
        </GridItem>
</grid>
    </div>
  );
};
 
export default index;