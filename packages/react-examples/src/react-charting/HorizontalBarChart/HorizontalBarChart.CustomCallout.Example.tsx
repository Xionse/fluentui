import * as React from 'react';
import { ChartHoverCard, HorizontalBarChart, IChartProps, IChartDataPoint } from '@fluentui/react-charting';
import { DefaultPalette } from '@fluentui/react/lib/Styling';
import { DirectionalHint } from '@fluentui/react';
import * as d3 from 'd3-format';

export const HorizontalBarChartCustomCalloutExample: React.FunctionComponent<{}> = () => {
  const hideRatio: boolean[] = [true, false];

  const data: IChartProps[] = [
    {
      chartTitle: 'one',
      chartData: [
        {
          legend: 'one',
          horizontalBarChartdata: { x: 1543, y: 15000 },
          color: DefaultPalette.tealDark,
          xAxisCalloutData: '2020/04/30',
          yAxisCalloutData: '19K',
        },
      ],
    },
    {
      chartTitle: 'two',
      chartData: [
        {
          legend: 'two',
          horizontalBarChartdata: { x: 800, y: 15000 },
          color: DefaultPalette.purple,
          xAxisCalloutData: '2020/04/30',
          yAxisCalloutData: '19K',
        },
      ],
    },
    {
      chartTitle: 'three',
      chartData: [
        {
          legend: 'three',
          horizontalBarChartdata: { x: 8888, y: 15000 },
          color: DefaultPalette.redDark,
          xAxisCalloutData: '2020/04/30',
          yAxisCalloutData: '19K',
        },
      ],
    },
    {
      chartTitle: 'four',
      chartData: [
        {
          legend: 'four',
          horizontalBarChartdata: { x: 15888, y: 15000 },
          color: DefaultPalette.themeDarkAlt,
          xAxisCalloutData: '2020/04/30',
          yAxisCalloutData: '19K',
        },
      ],
    },
    {
      chartTitle: 'five',
      chartData: [
        {
          legend: 'five',
          horizontalBarChartdata: { x: 11444, y: 15000 },
          color: DefaultPalette.themePrimary,
          xAxisCalloutData: '2020/04/30',
          yAxisCalloutData: '19K',
        },
      ],
    },
    {
      chartTitle: 'six',
      chartData: [
        {
          legend: 'six',
          horizontalBarChartdata: { x: 14000, y: 15000 },
          color: DefaultPalette.greenDark,
          xAxisCalloutData: '2020/04/30',
          yAxisCalloutData: '19K',
        },
      ],
    },
    {
      chartTitle: 'seven',
      chartData: [
        {
          legend: 'seven',
          horizontalBarChartdata: { x: 9855, y: 15000 },
          color: DefaultPalette.accent,
          xAxisCalloutData: '2020/04/30',
          yAxisCalloutData: '19K',
        },
      ],
    },
    {
      chartTitle: 'eight',
      chartData: [
        {
          legend: 'eight',
          horizontalBarChartdata: { x: 4250, y: 15000 },
          color: DefaultPalette.blueLight,
          xAxisCalloutData: '2020/04/30',
          yAxisCalloutData: '19K',
        },
      ],
    },
  ];

  return (
    <div style={{ maxWidth: 600 }}>
      <HorizontalBarChart
        data={data}
        hideRatio={hideRatio}
        calloutProps={{
          directionalHint: DirectionalHint.topAutoEdge,
        }}
        // eslint-disable-next-line react/jsx-no-bind
        barChartCustomData={(props: IChartProps) => {
          const chartData: IChartDataPoint = props!.chartData![0];
          const x = chartData.horizontalBarChartdata!.x;
          const y = chartData.horizontalBarChartdata!.y;
          return (
            <div>
              <span style={{ fontWeight: 'bold' }}>{d3.format('.2s')(x)}</span>
              <span>{`/${d3.format('.2s')(y)} hours`}</span>
            </div>
          );
        }}
        // eslint-disable-next-line react/jsx-no-bind
        onRenderCalloutPerHorizontalBar={(props: IChartDataPoint) =>
          props ? (
            <ChartHoverCard
              XValue={props.xAxisCalloutData}
              Legend={props.legend}
              YValue={`${props.yAxisCalloutData || props.horizontalBarChartdata?.y} h`}
              color={props.color}
            />
          ) : null
        }
      />
    </div>
  );
};
