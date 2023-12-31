import { Button, CircularProgress, Paper, Stack, Typography } from "@mui/material";
import { useGetPresentorsQuery } from "../api/apiSlice";
import { useMemo } from "react";

let PresentorCard = ({ presentor, onClick }) => {
    return (
        <Paper>
            <Stack direction="row" spacing={2}>
                <Typography variant="h6">{presentor.name}</Typography>
                <Button onClick={() => onClick(presentor, presentor.name)}>Rate</Button>
            </Stack>
        </Paper>
    )
}

function RatePanel(props) {
    const { handleClick } = props;

    const {
        data: presentors = [],
        isLoading,
        isSuccess,
        error,
    } = useGetPresentorsQuery(localStorage.getItem("selectedMeeting"))
    
    const fetchedPresentors = useMemo(() => {
        const fetchedPresentors = presentors.slice();
        return fetchedPresentors;
    }, [presentors]);

    let content;

    if (isLoading) {
        content = <CircularProgress />
    } else if (isSuccess) {
        const renderedPresentors = fetchedPresentors.map((presentor) => (
            <PresentorCard key={presentor.id} presentor={presentor} onClick={handleClick} />
        ));

        content = renderedPresentors;
    } else {
        content = <Typography>{error.toString()}</Typography>
    }

    return (
        <Paper>
            <Stack spacing={2}>
                {content}
            </Stack>
        </Paper>
    );
}

export default RatePanel;