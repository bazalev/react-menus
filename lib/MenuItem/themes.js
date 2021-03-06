'use strict';

module.exports = {
    default: {
        // overStyle: {
        //     background: 'rgb(202, 223, 255)'
        // },
        overStyle: {
            background: 'linear-gradient(to bottom, rgb(125, 191, 242) 0%, rgb(110, 184, 241) 50%, rgb(117, 188, 242) 100%)',
            color: 'white'
        },
        activeStyle: {
            // background: 'rgb(118, 181, 231)',
            //-6 lightness from overStyle
            background: ' linear-gradient(to bottom, rgb(106,182,240) 0%,rgb(91,175,239) 50%,rgb(96,178,240) 100%)',
            color: 'white'
        },
        expandedStyle: {
            // background: 'rgb(215, 231, 255)',
            background: 'linear-gradient(to bottom, rgb(162,210,246) 0%,rgb(151,204,245) 50%,rgb(154,206,246) 100%)',
            color: 'white'
        },
        disabledStyle: {
            color: 'gray',
            cursor: 'default'
        }
    }
};