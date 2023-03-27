import React, { useState, useEffect, Fragment } from 'react';
import Tooltip from 'rc-tooltip';

function UseTooltip({ overlayClassName,
    placement,
    trigger,
    overlay = null,
    children = null,
    mouseEnterDelay,
    mouseLeaveDelay }) {

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {

        const { innerWidth: width } = window;

        if (width > 820) {

            setIsLargeScreen(true);

        }

    }, []);

    return (
        <>
            {isLargeScreen === true ? (
                <Tooltip
                    overlayClassName={overlayClassName}
                    mouseEnterDelay={mouseEnterDelay}
                    mouseLeaveDelay={mouseLeaveDelay}
                    placement={placement}
                    trigger={trigger}
                    overlay={overlay}
                >
                    {children}
                </Tooltip>
            )
                : (
                    <>
                        {children}
                    </>
                )}
        </>
    );

}

export default UseTooltip;
