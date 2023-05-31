import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const SearchExercises = () => {
    const [Search, setSearch] = useState('')

    const handleSearch = async () => {
        if(Search) {
            const exerciseData = await fetchData(); 
        }
    }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography fontweight={700} sx={{ fontsize: {lg: '44px', xs: '30px'}}}
        mb="50px" textAlign="center">
            Lit Fitness You <br /> Should Know
        </Typography>
        <Box position="relative" mb="72px">
            <TextField
            sx={{
                input: { fontWeight: '700', border: 'none', borderRadius: '4px'},
                width: { lg: '800px', xs: '350px'},
                backgroundColor: '#fff',
                borderRadius: '40px'
            }}
                height="76px"
                value={Search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder="Search Exercises"
                type="text"
            />
            <Button className="search-btn"
                sx={{
                    bgcolor: '#FF2625',
                    color: '#fff',
                    texTransform: 'none',
                    width: { lg: '175px', xs: '80px'},
                    fontSize: { lg: '20px', xs: '14px'},
                    height: '56px',
                    position: "absolute",
                    right: '0'
                }}
                onCLick={handleSearch}
            >
            Search
            </Button>
        </Box>

    </Stack>
  )
}

export default SearchExercises