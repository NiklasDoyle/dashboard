import { Center, Title } from "@mantine/core";
import WidgetBlock from "../WidgetBlock/WidgetBlock";

function DateTimeContainer(props: { children:React.ReactNode}) {
    return ( 
        <WidgetBlock>
            <Center>
                <Title size={40}>
                    {props.children}
                </Title>
            </Center>
        </WidgetBlock>
     );
}

export default DateTimeContainer;