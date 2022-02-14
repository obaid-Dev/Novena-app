import React from 'react';
import { useForm } from 'react-hook-form';


const Form = ({user, onSubmit}) => {
    const { register,handleSubmit } = useForm({
        defaultValues: { Name: user ? user.Name: ""},
        defaultValues: { Email: user ? user.Email: ""},
        defaultValues: { Topic: user ? user.Topic:""},
        defaultValues: { Number: user ? user.Number:""},
        defaultValues: { Message: user ? user.Message:""}
    })

    const submitHandler = handleSubmit((data) => {
        onSubmit(data);
    })
    return (
        <div>
            <form  id="contact-form" className="contact__form " method="POST" action="/Contact" onSubmit={submitHandler}>
                  {/* form message */}
                  <div className="row">
                    <div className="col-12">
                      <div className="alert alert-success contact__msg" style={{display: 'none'}} role="alert">
                        Your message was sent successfully.
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input name="name" {...register('Name')} id="name" type="text" className="form-control" placeholder="Your Full Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input name="email" id="email" {...register('Email')} type="email" className="form-control" placeholder="Your Email Address" required />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input name="subject" id="subject" {...register('Topic')} type="text" className="form-control" placeholder="Your Query Topic" required />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input name="phone" id="phone" {...register('Number')} type="text" className="form-control" placeholder="Your Phone Number" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-group-2 mb-4">
                    <textarea name="message" id="message" {...register('Message')} className="form-control" rows={8} placeholder="Your Message" required defaultValue={""} />
                  </div>
                  <div>
                    <input className="btn btn-primary btn-md" name="submit" type="submit" defaultValue="Send Messege" />
                  </div>
                </form>
        </div>
    );
}

export default Form;