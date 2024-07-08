import { List, Paper, Title, createTheme } from "@mantine/core";

const lightTheme = createTheme({
    // fontFamily: 'Open Sans, sans-serif',
    fontFamily: 'system-ui',
    primaryColor: 'cyan',

    colors: {
        backgroundBlue: [
            "#6A8DFF", // Lightest
            "#5A7DE2",
            "#4A6DC5",
            "#3A5DA8",
            "#2A4D8B",
            "#1A3D6E",
            "#0A2D51",
            "#002034",
            "#001017",
            "#000000"  // Darkest
        ],
        calendarDayBox: [
            '#eef3ff',
            '#dce4f5',
            '#b9c7e2',
            '#94a8d0',
            '#748dc1',
            '#5f7cb8',
            '#5474b4',
            '#44639f',
            '#39588f',
            '#2d4b81',
        ],
        selectionColors: [
            "#FFECEC", // Lightest
            "#FFD6D6",
            "#FFBFBF",
            "#FFA8A8",
            "#FF9191",
            "#FF7A7A",
            "#FF6363",
            "#FF4C4C",
            "#FF3535",
            "#FF1E1E"  // Darkest
        ],
        background: [ //greys
            "#F5F5F5", // Lightest
            "#E0E0E0",
            "#BDBDBD",
            "#9E9E9E",
            "#757575",
            "#616161",
            "#424242",
            "#303030",
            "#212121",
            "#000000"  // Darkest
        ],
    },
    components: {
        Title: Title.extend({
            defaultProps: {
                c: '--bs-primary-text-emphasis',
            }
        }),
        ListItem: List.Item.extend({
            defaultProps: {
                c: '--bs-primary-text-emphasis',
            }
        }),
        Paper: Paper.extend({
            defaultProps: {
                radius: '10',
                withBorder: false,
                style: {
                    borderColor: '#707070',
                    borderWidth: '1px',
                }
            }
        }),
    },
});

const darkTheme = createTheme({
    // fontFamily: 'Open Sans, sans-serif',
    fontFamily: 'system-ui',
    primaryColor: 'cyan',
    colors: {
        backgroundBlue: [
            "#6A8DFF", // Lightest
            "#5A7DE2",
            "#4A6DC5",
            "#3A5DA8",
            "#2A4D8B",
            "#1A3D6E",
            "#0A2D51",
            "#002034",
            "#001017",
            "#000000"  // Darkest
        ],
        calendarDayBox: [
            '#eef3ff',
            '#dce4f5',
            '#b9c7e2',
            '#94a8d0',
            '#748dc1',
            '#5f7cb8',
            '#5474b4',
            '#44639f',
            '#39588f',
            '#2d4b81',
        ],
        selectionColors: [
            "#FFECEC", // Lightest
            "#FFD6D6",
            "#FFBFBF",
            "#FFA8A8",
            "#FF9191",
            "#FF7A7A",
            "#FF6363",
            "#FF4C4C",
            "#FF3535",
            "#FF1E1E"  // Darkest
        ],
        background: [ //greys
            "#757575",
            "#616161",
            "#424242",
            "#303030",
            "#212121",
            "#000000",
            "#F5F5F5", // Lightest
            "#E0E0E0",
            "#BDBDBD",
            "#9E9E9E",
 // Darkest
        ],
    },
    components: {
        Text: {
            defaultProps: {
                color: 'white'
            }
        },
        Title: Title.extend({
            defaultProps: {
                c: '#ddd',
            }
        }),
        ListItem: List.Item.extend({
            defaultProps: {
                c: '#ddd',
            }
        }),
        Paper: Paper.extend({
            defaultProps: {
                radius: '10',
                withBorder: false,
                style: {
                    borderColor: '#707070',
                    borderWidth: '1px',
                }
            }
        })
    }
});
export default darkTheme;