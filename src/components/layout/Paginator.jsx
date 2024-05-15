import { Box, FormControl, InputLabel, MenuItem, Button, Select, Typography } from "@mui/material"
import usePokemonList from "../../hooks/usePokemonList"

const Paginator = () => {
 
    const { currentPage, setCurrentPage, setPerPage, perPage, totalPages} = usePokemonList()
  

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
        console.log(currentPage)
    }

    const prevPage = () => {
        setCurrentPage(currentPage - 1)

    }

    const handlePerPageChange = (e) => {
        setPerPage(parseInt(e.target.value))
        setCurrentPage(1)
    }

    return (
        
            <Box sx={{
                padding: "20px",
                display: "grid",
                gridTemplateColumns: "10% 10% 10% 10%",
                gap: "20px",
                marginTop: "20px",
                justifyContent: "flex-end",

            }}>
                <FormControl>
                    <InputLabel>Por página</InputLabel>
                    <Select
                        sx={{ mt: 1 }}
                        value={perPage}
                        onChange={handlePerPageChange}
                    >
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={40}>40</MenuItem>
                        <MenuItem value={60}>60</MenuItem>
                    </Select>
                </FormControl>

                <Typography variant="body1" sx={{ mt: 3 }}>Página {currentPage} de {totalPages}</Typography>

                <Button variant="contained" sx={{ width: "150px", height: "40px", mt: 2 }} onClick={prevPage} disabled={currentPage === 1}>Previous</Button>
                <Button variant="contained" sx={{ width: "150px", height: "40px", marginLeft: 3, mt: 2 }} onClick={nextPage} disabled={currentPage === totalPages}>Next</Button>
            </Box>

    )
}

export default Paginator
