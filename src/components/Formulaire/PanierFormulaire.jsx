import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PanierFormulaire = ({ ajouterAuPanier }) => {
    const initialValues = {
        image: '',
        nom: '',
        prix: '',
    };

    const validationSchema = Yup.object().shape({
        image: Yup.string(),
        nom: Yup.string(),
        prix: Yup.string(),
    });

    const handleSubmit = (values, { resetForm }) => {
        ajouterAuPanier(values);
        resetForm();
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ values }) => (
                <Form>
                    <div>
                        <label htmlFor="image">Produit:</label>
                        <Field type="text" name="image" />
                        <ErrorMessage name="image" component="div" className="error" />
                    </div>
                    <div>
                        <img src={values.image} alt={values.nom} />
                    </div>
                    <div>
                        <label htmlFor="nom">Nom du produit:</label>
                        <Field type="text" name="nom" />
                        <ErrorMessage name="nom" component="div" className="error" />
                    </div>
                    <div>
                        <label htmlFor="prix">Prix du produit (Euros):</label>
                        <Field type="number" name="prix" />
                        <ErrorMessage name="prix" component="div" className="error" />
                    </div>
                    <div>
                        <button type="submit">Ajouter au panier</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default PanierFormulaire;