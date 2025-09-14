import { certificates } from "@/data";
import Link from "next/link";
import Image from "next/image";

const CertificatesPage = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl text-center mx-auto font-bold mb-6">Certificates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl justify-center">
        {certificates.map((cert) => (
          <div key={cert.id} className="border p-4 rounded shadow">
            <Image
              src={cert.image}
              // src={`dheeraj-portfolio${cert.image}`}

              alt={cert.description}
              width={400}
              height={300}
              className="mb-4 rounded mx-auto"
            />
            <p className="text-gray-400 mb-4 text-center">{cert.description}</p>
            <Link
              href={`/certs/${cert.fileName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Certificate
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesPage;
