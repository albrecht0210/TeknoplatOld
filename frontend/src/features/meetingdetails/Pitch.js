import { Accordion, AccordionDetails, AccordionSummary, Box, CircularProgress, Typography } from "@mui/material";
import { useGetPresentorsQuery } from "../api/apiSlice";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useMemo } from "react";

let PitchData = ({ presentor }) => {
    return (
        <Accordion key={presentor.id}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${presentor.name}-content`}
                id={`${presentor.name}-header`}
            >
                <Typography>{presentor.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{presentor.description}</Typography>
            </AccordionDetails>
        </Accordion>
    )
}

function Pitch() {
    const {
        data: presentors = [],
        isLoading,
        isSuccess,
        error,
    } = useGetPresentorsQuery(Number(localStorage.getItem("selectedMeeting")))

    console.log(presentors)
    const fetchedPresentors = useMemo(() => {
        const fetchedPresentors = presentors.slice();
        return fetchedPresentors;
    }, [presentors]);

    let content;

    if (isLoading) {
        content = <CircularProgress />
    } else if (isSuccess) {
        const renderedPresentors = fetchedPresentors.map((presentor) => (
            <PitchData key={presentor.id} presentor={presentor} />
        ));

        content = renderedPresentors;
    } else {
        content = <Typography>{error.toString()}</Typography>
    }

    return (
        <Box>
            {content}
        </Box>
    );
}

export default Pitch;