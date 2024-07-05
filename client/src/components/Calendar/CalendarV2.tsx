import { useEffect } from "react";
import WidgetBlock from "../WidgetBlock/WidgetBlock";

const iframeSource = "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FPhoenix&bgcolor=%23ffffff&showNav=0&showPrint=0&showCalendars=0&showTz=0&showDate=0&showTitle=0&showTabs=0&src=bmRveWxlMTMxM0BnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=aTZsdGFta2MyMnE5dG1tdjdxb2duaTVxdXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bDFnM2QzOWxiOGJzOWc3djN1djdpMm8zYWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NGhuNjI5amtoZ3Q3OGtmZTV2aWs2OTFoN2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YWJxamdmZzFpOGhmYXUyODQ2bGQzZjRlbHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=dGJjaGR0Z2lvYzFyMW81b21xMTRxcDI5MzBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cW5yYnIzaTBicnI5Zmx1NnA5dnMza2ExaXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%237986CB&color=%23009688&color=%23C0CA33&color=%23616161&color=%23A79B8E&color=%23C0CA33&color=%23F4511E&color=%23E4C441&color=%23616161";

function CalendarV2() {
    useEffect(() => { 
        const file_get_contents = async (uri: any) => {
            let res = await fetch(uri),
            ret = await res.text();
            return ret
        };

        console.log(file_get_contents(iframeSource));

    }, []);


    return ( 
        <WidgetBlock>
            {/* <iframe src={iframeSource}
                style={{
                    border: 'solid 0px #777',
                    width: "100%",
                    height: "70vh"
                }}>
            </iframe> */}
            cal
            {/* { frameborder: "0", scrolling: "no" } */}
        </WidgetBlock>
     );
}

export default CalendarV2;