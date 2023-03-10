import React from "react"


const Strain = ({ Product, SetProduct }) => {
  const [Strain, SetStrain] = React.useState({
    N: "",
    i: "",
    s: "",
    c: "",
    h: "",
  })
  React.useEffect(() => {
    SetStrain(Strain => ({ Strain, [Product.strain]: "active" }))
  }, [Product])


  const handleChange = (event) => {
    const value = event.target.value;
    SetProduct({
      ...Product, [event.target.name]: value
    });
    SetStrain(Strain => ({ Strain, [event.target.value]: "active" }))
  };

    return (
        <>
            {/* <div className="row  strain_cont_row" > */}
                <div className="col-lg-2">
          <button  name="strain" value={'N'} onClick={handleChange} className={`btn btton strain_btn + ${Strain.N}`}>None</button>
                </div>
                <div className="col-lg-2" >
          <button name="strain" value={'i'} onClick={handleChange} className={`btn btton  strain_btn + ${Strain.i}`}>Indica</button>
                </div>
                <div className="col-lg-2">
          <button name="strain" value={'s'} onClick={handleChange} className={`btn btton + ${Strain.s}`} >Sativa</button>
                </div>
                <div className="col-lg-2">
          <button name="strain" value={'c'} onClick={handleChange} className={`btn btton + ${Strain.c}`} >CBD</button>
                </div>
                <div className="col-lg-2">
          <button name="strain" value={'h'} onClick={handleChange} className={`btn btton + ${Strain.h}`} >Hybrid</button>
                </div>
                


            {/* </div> */}
            {/* <div className="row mt-2">
           
            </div> */}
        </>
    )
}
export default Strain