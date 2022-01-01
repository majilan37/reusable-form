import { useState } from 'react'
import { Link } from 'react-router-dom'

const prepareForm = (formArr) => 
    formArr.reduce((p, v) => ({...p, [v.name]: ''}), {})


function Form({ title, formArr, submitBtn, onSubmit, redirect}) {
    const [form, setForm] = useState(prepareForm(formArr))

    const onChange = (e) => 
        setForm((p) => ({...p, [e.target.name]: e.target.value}))

    const onSubmitHandler = () => 
        onSubmit(form, setForm(prepareForm(formArr)))

    const hasRedirect = !!redirect

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSubmitHandler()
        }} className="w-full border border-gray-800 p-5 space-y-2" autoComplete="off">
            <h2 className="text-2xl font-medium">{title}</h2>
            {formArr.map(({label, name, type}, index) => (
                <div key={index} className="last-of-type:mb-2">
                    <label className="font-semibold text-sm block m-2" htmlFor={name}>{label}</label>
                    <input 
                        name={name} 
                        type={type} 
                        className='border border-gray-600 focus:ring-2 ring-blue-600 transition-all duration-200 w-full py-2 px-4 outline-none' 
                        placeholder={label} 
                        value={form[name]}
                        onChange={onChange}
                    />
                </div>
            ))}
            <button className='bg-blue-700 hover:bg-blue-600 active:bg-blue-800 w-full py-2 text-white' type="submit">{submitBtn}</button>
            {hasRedirect && (
                <div className="space-x-2 text-center">
                    <span>{redirect.label}</span>
                    <Link className="text-green-700 underline" to={redirect.link.to}>{redirect.link.label}</Link>
                </div>
            )}
        </form>
    )
}

Form.defaultProps = {
    title: 'Sign in',
    formArr:[
        {label: 'Email', name: 'email', type: 'text',},
        {label: 'Password', name: 'password', type: 'password',}
    ],
    submitBtn: 'Sign in',
    onSubmit: (data) => console.log(data),
    redirect: {
        label: "Don't have an account ?",
        link:{
            label: "Register Now",
            to: '/register'
        }
    }
}

export default Form
