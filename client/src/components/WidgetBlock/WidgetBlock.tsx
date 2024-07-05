import { MantineGradient, Paper, StyleProp, getGradient, useMantineTheme } from "@mantine/core";

interface WidgetBlockProps {
    children: React.ReactNode;
    backgroundGradient?: MantineGradient;
    useGradient?: boolean;
    color?: string;
    h?: string | number
}

function WidgetBlock({ children, backgroundGradient, useGradient = true, color = 'backgroundBlue.6', h}: WidgetBlockProps) {
    const theme = useMantineTheme();
    const gradient = backgroundGradient
        ? getGradient(backgroundGradient, theme)
        : getGradient({ deg: 360, from: 'backgroundBlue.5', to: 'backgroundBlue.6' }, theme);
    
    return (
        <Paper
            bg={useGradient ? gradient : color}
            radius={40}
            p={20}
            h={h ?? 'auto'}
            style={{
                overflow: 'hidden',
            }}
        >
            {children}
        </Paper>
    );
}

export default WidgetBlock;