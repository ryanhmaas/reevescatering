import React from "react"
import LeafletMap from "../components/LeafletMap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm"

function ContactUs() {
  return (
    <Layout>
      <SEO title="Contact Us" />
      <section className="leaflet">
        <div className="leaflet__wrapper">
          <LeafletMap lat={100} long={100} />
          <ContactForm />
        </div>
      </section>
    </Layout>
  )
}

export default ContactUs
