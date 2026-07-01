import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Manual de administración',
    emoji: '🗂️',
    description: (
      <>
        Guía completa para configurar y administrar la plataforma: catálogo,
        precios, empresas, usuarios y pedidos.
      </>
    ),
  },
  {
    title: 'Roles y permisos',
    emoji: '👥',
    description: (
      <>
        Qué puede hacer cada rol del sistema — administrador, asesor
        comercial, cliente y repartidor — y cómo se asignan.
      </>
    ),
  },
  {
    title: 'Procesos paso a paso',
    emoji: '✅',
    description: (
      <>
        Instrucciones claras con ejemplos y capturas para cada tarea
        administrativa del día a día.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span className={styles.featureEmoji} role="img" aria-hidden="true">
          {emoji}
        </span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
