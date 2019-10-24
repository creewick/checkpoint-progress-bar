import React from 'react';
import {sum} from "./etc";
import {getLineColor, getPointColor} from "./DEFAULTS";
import BarPart from "./BarPart";
import BarPoint from "./BarPoint";
import BarContainer from "./BarContainer";

export default function ProgressBar({ points, completed, height }) {
    const completedSum = sum(completed);
    const pointsSum = sum(points);
    const total = Math.max(pointsSum, completedSum);

    return (
        <BarContainer height={height}>
          {completed.map((part, i) => (
            <BarPart key={i} {...{part, total, height}} color={getLineColor(i)}
                     left={i === 0} right={i === completed.length - 1} />
          ))}

          {points.map(function (part, i) {
            this.sum += part;
            return <BarPoint key={i} {...{total, height}} part={this.sum} color={getPointColor(completed, this.sum)} />
          }, {sum: 0})}
        </BarContainer>
    );
}
