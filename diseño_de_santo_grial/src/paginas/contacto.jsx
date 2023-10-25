//contacto.jsx
import { Card } from 'primereact/card';
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const Contacto = () => {
  const contactData = [
    { type: 'Email', value: 'correo@example.com' },
    { type: 'Teléfono', value: '+2994599175' },
    { type: 'Dirección', value: '123 Calle Principal, Ciudad' },
  ];

  const cardHeader = (
    <div className="p-card-title">Información de Contacto</div>
  );

  const contactList = (
    <ul>
      {contactData.map((contact, index) => (
        <li key={index}>
          <strong>{contact.type}:</strong> {contact.value}
        </li>
      ))}
    </ul>
  );

  return (
    <div className=' h-screen w-full'>
    <div className="grid p-justify-center h-screen">
      <div className="col-12">
    <Header />
    </div>
    </div>
    <div className="grid p-justify-center h-screen ">
      <div className="col-12">
        <Card title={cardHeader}>
          {contactList}
        </Card>
        </div>
        </div>
        <div className="grid p-justify-center h-screen">
      <div className="col-12">
        <Footer />
        </div>
      </div>
      </div>
  );
};
