import Layout from "../components/layout";
import Image from 'next/image';

export default function Home() {
  return (
    <Layout size="full">
      <div className="home">
        <div className="intro">
          <h1>Hi, I'm Ryan 👋🏼</h1>
          <div>
            <h3>I'm currently:</h3>
            <ul>
              <li>👨🏻‍💻 working as a backend-leaning-full-stack engineer&mdash; mostly Java, Spring, MySQL, Kafka, Kubernetes, with a sprinkle of Ember.js</li>
              {/* TODO link to lab */}
              <li>🔬 building out my homelab</li>
            </ul>
          </div>

          <div>
            <h3>Outside of engineering:</h3>
            <ul>
              <li>✈️ I'm in the process of getting my private pilot license</li>
              <li>🥁 I play drums and arrange/perform percussion covers</li>
              <li>🥘 I enjoy cooking. I've been called the pasta prince and the spaghetti king 👑 </li>
            </ul>
          </div>
        </div>

        <div className="img-container">
          <Image src="/img/ryan-sitting.jpg" alt="Ryan Rishi" className="object-contain rounded-lg h-full w-full" width="3648" height="5472" />
        </div>
      </div>
    </Layout>
  );
}
