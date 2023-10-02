import { useState } from "react";

function CreateHuman({ }) {
    const [human, setHuman] = useState('');
    const [humanL, setHumanL] = useState('');
    const [birthyear, setbirthyear] = useState('');

    const handleChange = (event) => {
        // setHuman(event.target.value)
        // setHumanL(event.target.value)
        // setbirthyear(event.target.value)
        console.log(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // onSubmit(human)
        // setHuman(' ');
        console.log(event)
    };

    return <div className="create-human">
        <h3>Register Now </h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label> First Name :</label>
                <div>
                    <input value={human} />
                </div>
            </div>
            <div>
                <label > Last Name :</label>
                <div>
                    <input value={humanL} />
                </div>
            </div>
            <div class="field">
                <label for="birthYear"> Birth Year :</label>
                <div class="control">
                    <div class="select">
                        <input className="month" value={birthyear} min="1900" max="2023" />
                    </div>
                </div>
            </div>
            <button>Register</button>
        </form>
    </div>;

}

export default CreateHuman;