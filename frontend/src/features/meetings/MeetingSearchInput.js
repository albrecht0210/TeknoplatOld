import { TextField } from '@mui/material';

function MeetingSearchInput(props) {
    const { value, handleChange } = props;

    return (
        <TextField
            id="searchMeeting"
            name="searchMeeting"
            type="text"
            value={value}
            onChange={handleChange}
            autoComplete='off'
            variant="outlined"
            sx={{ ml: 'auto' }}
            size='small'
        />
    );
}

export default MeetingSearchInput;