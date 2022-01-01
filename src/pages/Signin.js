import Form from "../components/Form"

function Signin() {
    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <div className='max-w-2xl mx-auto w-full'>
            <Form 
                title='Sign in'
                formArr={[
                    {label: 'Email', name: 'email', type: 'text',},
                    {label: 'Password', name: 'password', type: 'password',}
                ]}
                submitBtn='Sign in'
                onSubmit={(data) => onSubmit(data)}
                redirect= {{
                    label: "Don't have an account ?",
                    link:{
                        label: "Register Now",
                        to: '/register'
                    }
                }}
            />
        </div>
    )
}

export default Signin
