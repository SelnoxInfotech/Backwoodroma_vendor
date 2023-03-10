
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
const LabResult = ({ Product, SetProduct }) => {
    const handleChange = (event) => {
        const value = event.target.value;
        SetProduct({
            ...Product, [event.target.name]: value
        });

    }
    return(
        <>
       <Box sx={{ display: "flex" }}>
                    <Box className="mask-box_lab">
                        <Box
                            className="mask_lab"
                            style={{
                                transform: `translateX(${Product.lab_Result === "percentage" ? 0 : "68px"})`
                            }}
                        />
                        <Button
                        name="lab_Result"
                        value = {"percentage"}
                            disableRipple
                            variant="text"
                            sx={{ color: Product.lab_Result === "percentage" ? "#ffffff" : "#5316AE" }}
                            onClick={handleChange}
                        >
                            %
                        </Button>
                        <Button
                         name="lab_Result"
                         value = {"Magnesium"}
                            disableRipple
                            variant="text"
                            sx={{ color: Product.lab_Result === "percentage" ? "#ffffff" : "#5316AE" }}
                             onClick={handleChange}
                        >
                            Mg.
                        </Button>
                    </Box>
                </Box>
        </>
    )
}
export default LabResult