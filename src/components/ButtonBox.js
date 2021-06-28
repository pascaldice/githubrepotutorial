import { Grid } from "@material-ui/core";
import React, { Children, cloneElement, isValidElement } from "react";

export default function ButtonBox(props) {
    console.log(props);
    return (
        <Grid
            container
            justify={props.justify}
            wrap={props.wrap}
            alignContent={props.alignContent}
            alignItems={props.alignItems}
            direction={props.direction}
            lg={props.lg}
            md={props.md}
            sm={props.sm}
            xl={props.xl}
            xs={props.xs}
            className={props.className}
            classes={props.classes}
        >
            {Children.map(props.children, (child) => {
                if (isValidElement(child)) {
                    return cloneElement(child, { style: { margin: props.spacing } });
                }

                return child;
            })}
        </Grid>
    );
}

// ButtonBox.propTypes = {
//     justify: PropTypes.oneOf([
//         undefined,
//         "flex-start",
//         "center",
//         "flex-end",
//         "space-between",
//         "space-around",
//         "space-evenly",
//     ]),
//     wrap: PropTypes.oneOf([undefined, "nowrap", "wrap", "wrap-reverse"]),
//     alignContent: PropTypes.oneOf([
//         undefined,
//         "stretch",
//         "center",
//         "flex-start",
//         "flex-end",
//         "space-between",
//         "space-around",
//     ]),
//     alignItems: PropTypes.oneOf([undefined, "flex-start", "center", "flex-end", "stretch", "baseline"]),
//     direction: PropTypes.oneOf([undefined, "row", "row-reverse", "column", "column-reverse"]),
//     lg: PropTypes.oneOf(undefined, false, "auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12),
//     md: PropTypes.oneOf(undefined, false, "auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12),
//     sm: PropTypes.oneOf(undefined, false, "auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12),
//     xl: PropTypes.oneOf(undefined, false, "auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12),
//     xs: PropTypes.oneOf(undefined, false, "auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12),
// };
