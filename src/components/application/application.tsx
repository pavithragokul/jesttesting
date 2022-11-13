export const ApplicationForm = ()=>{
    return(
        <>
        <h1 data-testid = 'heading-level1'>Road to Goal</h1>
        <h2>Step 1</h2>
        <p>All fields are mandatory</p>
        <span title="Close">X</span>
        <img src="https://via.placeholder.com/150" alt="a person with a laptop" />
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type={'text'} id='name' placeholder="fullName" value={'Pavithra'} onChange={()=>{
                }}></input>
            </div>
            <div>
            <label htmlFor="bio">Bio
                <textarea id = 'bio' name="bio" />
            </label>
            </div>
            <div>
                <label htmlFor="jobLocation">Job Location</label>
                <select id="jobLocation">
                    <option value={""}>Select a country</option>
                    <option value={'Ind'}>India</option>
                    <option value={'US'}>United States</option>
                </select>
            </div>
            <div>
                <label>
                    <input type={'checkbox'} id='terms'/>I agree to the terms and condition
                </label>
            </div>
            <button>Submit</button>
            
        </form>
        </>
    )
}