import { MantineGradient, Paper, StyleProp, getGradient, useMantineTheme } from "@mantine/core";

interface WidgetBlockProps {
    children: React.ReactNode;
    backgroundGradient?: MantineGradient;
    useGradient?: boolean;
    color?: string;
    h?: string | number
}

function WidgetBlock({ children, backgroundGradient, useGradient = false, color = 'background.1', h}: WidgetBlockProps) {
    const theme = useMantineTheme();
    const gradient = backgroundGradient
        ? getGradient(backgroundGradient, theme)
        : getGradient({ deg: 360, from: 'background.2', to: 'background.3' }, theme);
    
    return (
        <Paper
            bg={useGradient ? gradient : color}
            radius={15}
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