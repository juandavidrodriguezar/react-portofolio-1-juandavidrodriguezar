import React from 'react'
import './projects.css'
import CRYPTO from '../../assets/criptoapp.png'
import PROMPT from '../../assets/promptinjectionapp.png'
import SYDNEY from '../../assets/sydneyapp.png'
import OPENKBP from '../../assets/openkbp.png'

const projects = [
  {
    image: CRYPTO,
    title: 'Crypto Price Prediction Dashboard',
    description:
      'An interactive Streamlit dashboard for exploring historical cryptocurrency data and ML-based next-day price predictions across Bitcoin, Ethereum, XRP, and Solana. I built the Bitcoin module using a LightGBM model trained on CoinGecko market data, integrating live API calls with visual forecasting outputs.',
    tags: ['Python', 'Streamlit', 'LightGBM', 'Machine Learning', 'CoinGecko API'],
    link: 'https://36120-25sp-group6-at3-crypto-forecast.streamlit.app/',
  },
  {
    image: PROMPT,
    title: 'LLM Prompt Injection Security Evaluator',
    description:
      'A research-grade evaluation framework for testing LLM systems against prompt injection attacks. It runs experiments on 2,346 curated attack cases from HackAPrompt and TensorTrust, applies a mitigation layer, and compares baseline vs. defended model behaviour. Results are surfaced through an interactive dashboard for analysis.',
    tags: ['Python', 'LLM Security', 'NLP', 'Prompt Injection', 'Streamlit'],
    link: 'https://juandavidrodriguezar-g5-eval-dashboard.hf.space/',
  },
  {
    image: SYDNEY,
    title: 'Sydney Liveability AI',
    description:
      'An AI-powered suburb recommendation platform for Greater Sydney. Users define a personalised weight profile (safety, transport, lifestyle, affordability) through a conversational flow. A multi-agent RAG pipeline — built with CrewAI, LangChain, and ChromaDB — fuses government crime data, transport records, OSM amenities, and Reddit community sentiment to rank suburbs and ground every answer in auditable evidence.',
    tags: ['RAG', 'CrewAI', 'LangChain', 'Next.js', 'FastAPI', 'PostgreSQL'],
    link: 'https://sydney-liveability-ai.vercel.app/',
    linkLabel: 'Visit App →',
  },
  {
    image: OPENKBP,
    title: 'OpenKBP-Opt: Knowledge-Based Radiotherapy Planning',
    description:
      'Co-authored international research published in Physics in Medicine & Biology (IOP Publishing, 2022). The study evaluated 76 knowledge-based planning pipelines across 19 dose prediction models and 4 dose mimicking optimisers, generating 7,600 radiotherapy treatment plans for head-and-neck cancer patients. The best pipeline satisfied 77% of clinical criteria, outperforming reference plans. All data and code were released publicly to lower barriers to entry in radiotherapy AI research.',
    tags: ['Machine Learning', 'Medical Physics', 'Radiotherapy', 'Dose Prediction', 'Research'],
    link: 'https://iopscience.iop.org/article/10.1088/1361-6560/ac8044',
    linkLabel: 'Read Paper →',
  },
]

const Projects = () => {
  return (
    <section id="projects">
      <h5>Applied AI and Data Science</h5>
      <h2>Data Science Projects</h2>

      <div className='container projects__container'>
        {projects.map(({ image, title, description, tags, link, linkLabel }, index) => (
          <article key={index} className='project__card'>
            <div className='project__image'>
              <img src={image} alt={title} />
            </div>
            <div className='project__body'>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className='project__tags'>
                {tags.map((tag, i) => (
                  <span key={i} className='project__tag'>{tag}</span>
                ))}
              </div>
              <a
                href={link}
                target='_blank'
                rel='noreferrer'
                className='btn btn-primary project__link'
              >
                {linkLabel || 'Visit App →'}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
