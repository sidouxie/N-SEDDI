import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import HeroSection from '@components/HeroSection'


const contact = () => {

    /* Here’s the juicy bit for posting the form submission */

    function handleSubmit(e){
      e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => alert("get submet"))
      .catch(error => alert(error));
      };

  function handleChange(e) {
    setState({ [e.target.name]: e.target.value })
  }

    const data = {
        title: "Contact",
        subtitle: "",
        bghero: "wallpaper_contact-08-min.jpg"
    }

    return (
        <Layout>
            <div style={{width : '100%',overflow : 'hidden'}}>
        <Head>
            <title>N.SEDDI - Commissaire aux compte comptable agrée à Alger</title>
            <link rel="icon" href="/static/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Montserrat:wght@100;300;400;600;700&display=swap" rel="stylesheet" />        
        </Head>

        <HeroSection data={data} />

        <div className="container-contact100">
            <div className="wrap-contact100">
              <form
                className="contact100-form validate-form"
                name="contact"
                method="post"
                action="/thanks"
                data-netlify="true"
                data-netlify-recaptcha="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                noValidate
              >
                <span className="contact100-form-title">
                  Envoie-nous un message
                </span>
                <p className="txt4">
                  <strong>POUR LES ENQUÊTES GÉNÉRALES</strong> - Veuillez
                  utiliser le formulaire de contact ci-dessous.
                </p>
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={handleChange} />
                  </label>
                </p>

                <label className="label-input100" htmlFor="first-name">
                  votre Prénom *
                </label>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Type first name"
                >
                  <input
                    id="first-name"
                    className="input100"
                    type="text"
                    name="name"
                    placeholder="Prénom"
                    required
                    onChange={handleChange}
                  />
                  <span className="focus-input100" />
                </div>

                <label className="label-input100" htmlFor="last-name">
                  votre Nom *
                </label>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Type last name"
                >
                  <input
                    className="input100"
                    type="text"
                    name="name"
                    placeholder="Nom"
                    required
                    onChange={handleChange}
                  />
                  <span className="focus-input100" />
                </div>

                <label className="label-input100" htmlFor="email">
                  votre Email *
                </label>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <input
                    className="input100"
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    required
                    onChange={handleChange}
                  />
                  <span className="focus-input100" />
                </div>

                <label className="label-input100" htmlFor="phone">
                  votre Numéro *
                </label>
                <div className="wrap-input100">
                  <input
                    id="phone"
                    className="input100"
                    type="text"
                    name="phone"
                    placeholder="+1 800 000000"
                    required
                    onChange={handleChange}
                  />
                  <span className="focus-input100" />
                </div>

                <label className="label-input100" htmlFor="message">
                  Message *
                </label>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Message is required"
                >
                  <textarea
                    id="message"
                    className="input100"
                    type="text"
                    name="message"
                    placeholder="Écrivez-nous un message"
                    required
                    onChange={handleChange}
                  />
                  <span className="focus-input100" />
                </div>

                

                <p className="container-contact100-form-btn">
                  <div className="container-contact100-form-btn">
                    <button className="contact100-form-btn" type="submit">
                      Envoyer
                    </button>
                  </div>
                </p>
              </form>
              <div className="contact100-more flex-col-c-m" id="bg-contact">
                <div className="flex-w size1 p-b-47">
                  <div className="txt1 p-r-25">
                    <span className="lnr lnr-map-marker" />
                  </div>

                  <div className="flex-col size2">
                    <span className="txt1 p-b-20">Adresse Postale</span>

                    <span className="txt2">
                      240 LOGEMENTS BT 14 N 2 LES GRANDS VENTS DELLY IBRAHIM ALGER
                    </span>
                  </div>
                </div>

                <div className="dis-flex size1 p-b-47">
                  <div className="txt1 p-r-25">
                    <span className="lnr lnr-phone-handset" />
                  </div>

                  <div className="flex-col size2">
                    <span className="txt1 p-b-20">Notre Numéro</span>

                    <span className="txt3">+213 673 78 26 90</span>
                  </div>
                </div>

                <div className="dis-flex size1 p-b-47">
                  <div className="txt1 p-r-25">
                    <span className="lnr lnr-envelope" />
                  </div>

                  <div className="flex-col size2">
                    <span className="txt1 p-b-20">Support Général</span>

                    <span className="txt3">CABINET.N.SEDDI.CAC@GMAIL.COM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="dropDownSelect1" />
      </div>
    </Layout>
    )
}

export default contact
