import Link from "next/link";
import { projects } from "@/data";

const research = [
  { id: "bank-deposit-ann", authors: "Jesutoba Lopez and Idowu Orukotan", date: "March 2025", dataset: "45,211 bank marketing records", methods: "One-hot encoding, standardization, SMOTE; shallow, deep and wide artificial neural networks", result: "Basic ANN was selected by AUC-ROC (0.9229). This is a class-imbalanced prediction task, so AUC, recall and precision matter alongside accuracy.", limitations: "Academic evaluation, not a production banking system. The uploaded report includes model comparisons and visualizations." },
  { id: "student-math-regression", authors: "Jesutoba Lopez and Ibrahim Olushola", date: "May 2025", dataset: "1,000 student observations from the Students Performance in Exams dataset", methods: "Linear, generalized, GLS, LAD, Huber, LTS, polynomial, subset selection, ridge, lasso and principal components regression", result: "The report compares models using R², MSE, AIC and BIC; GLS reports approximately R² = 0.878, MSE = 28.00.", limitations: "Observational academic modeling; reported associations should not be interpreted as causal effects." },
  { id: "patient-pro-glm", authors: "Jesutoba Lopez", date: "April 2026", dataset: "5,000 simulated observations from 1,000 patients across five weekly checkpoints", methods: "Binary logistic regression, ordinal logistic regression and Poisson regression; ROC, confusion matrices and goodness-of-fit comparisons", result: "The report selects binary logistic regression for its binary target and reported fit criteria; ordinal regression retains the original outcome ordering.", limitations: "Simulated data; the report does not demonstrate clinical effectiveness or validate treatment recommendations. The models use different response representations, so AIC comparisons require caution." }
];
export const metadata = { title: "Academic Research | Jesutoba Lopez", description: "Machine learning and statistical modeling case studies with methods, data and limitations." };
export default function ResearchPage() {
  return <main style={{maxWidth:980,margin:"0 auto",padding:"7rem 1.5rem 5rem",color:"var(--text)"}}>
    <Link href="/" style={{color:"var(--accent3)"}}>← Back to portfolio</Link>
    <h1 style={{fontSize:"clamp(2rem,5vw,3rem)",marginTop:"1.5rem"}}>Academic Research & Model Evaluation</h1>
    <p style={{color:"var(--text2)",lineHeight:1.7,maxWidth:740}}>Selected university research projects. Results are reported from the original project reports, not presented as deployed production models. Original PDF reports can be requested directly.</p>
    {research.map(item=>{const p=projects.find(x=>x.id===item.id);return <article id={item.id} key={item.id} style={{scrollMarginTop:100,marginTop:36,padding:28,border:"1px solid var(--border)",borderRadius:14,background:"var(--surface)"}}>
      <div style={{fontSize:12,color:"var(--teal2)",fontWeight:600}}>{item.date} · Academic project</div>
      <h2 style={{fontSize:24,margin:"10px 0"}}>{p?.title}</h2>
      <p style={{color:"var(--text2)",lineHeight:1.7}}>{p?.description}</p>
      <p><strong>Authors:</strong> {item.authors}</p><p><strong>Dataset:</strong> {item.dataset}</p>
      <h3>Approach</h3><p style={{lineHeight:1.7}}>{item.methods}</p>
      <h3>Results</h3><p style={{lineHeight:1.7}}>{item.result}</p>
      <h3>Limitations</h3><p style={{lineHeight:1.7}}>{item.limitations}</p>
      <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>{p?.tags.map(tag=><span key={tag} style={{fontSize:12,border:"1px solid var(--border)",borderRadius:6,padding:"5px 9px"}}>{tag}</span>)}</div>
      <p style={{marginTop:20}}><a href="mailto:lopezjesutoba@gmail.com?subject=Academic%20project%20report%20request" style={{color:"var(--accent3)"}}>Request original PDF report ↗</a></p>
    </article>})}
  </main>;
}
