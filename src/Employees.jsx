import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';
const Employees =({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {
   
    // let ProfileImg;
    // const setProfilePics = (gender)=>{
    //     (gender) === "male" ? ProfileImg = maleProfile : ProfileImg = femaleProfile
    // };
    
    return (
        <main className='container'>
            <div className='row justify-content-center mt-3 mb-3'>
                <div className='col-6'>
                    <select name="" id="" className='form-select form-select-lg' value = {selectedTeam} onChange = {handleTeamSelectionChange}>
                        <option value="TeamA">TeamA</option>
                        <option value="TeamB">TeamB</option>
                        <option value="TeamC">TeamC</option>
                        <option value="TeamD">TeamD</option>
                    </select>
                </div>
            </div>
            <div className='row justify-content-center mt-3 mb-3'>
                <div className='col-8'>
                    <div className='card-collection'>
            {
                employees.map((employee => {
                    // setProfilePics(employee.gender);
                    return(
                        <div id={employee.id} key={employee.id} className={(employee.teamName === selectedTeam? 'card m-2 standout' : 'card m-2')} style={{cursor: "pointer"}} onClick={handleEmployeeCardClick}>
                    {/* <img src={ProfileImg} alt="" srcset="" className='card-img-top' /> */}
                    {(employee.gender === 'male') ? <img src={maleProfile} alt="" srcSet="" className='card-img-top' />
                                                : <img src={femaleProfile} alt="" srcSet="" className='card-img-top' /> }
                    <div className='card-body'>
                        <h5 className='card-title'>FullName: {employee.fullName}</h5>
                        <p className='card-text'><b> Designation:</b> {employee.designation}</p>
                    </div>
                    </div>
                )}))
            }
            </div>
                </div>
            
            </div>
        </main>
    )
}


export default Employees;