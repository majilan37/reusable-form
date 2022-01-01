import Form from "../components/Form"

function Register() {
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className='max-w-2xl mx-auto w-full'>
            <Form
                title={'Register'}
                formArr={[
                    {label: 'Email', name: 'email', type: 'text',},
                    {label: 'Password', name: 'password', type: 'password',},
                    {label: 'Confirm Password', name: 'confirmPassword', type: 'password',}
                ]}
                submitBtn='Register'
                onSubmit={(data) => onSubmit(data)}
                redirect= {{
                    label: "Already have an account?",
                    link:{
                        label: "Sign in",
                        to: '/'
                    }
                }}
            />
        </div>
    )
}

export default Register
