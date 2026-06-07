export default function Skeleton(){
  return(
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <div className="skeleton" style={{height: '14px', width: '40%'}}></div>
      <div className="skeleton" style={{height: '40px'}}></div>
      <div className="skeleton" style={{height: '14px', width: '40%', marginTop: '6px'}}></div>
      <div className="skeleton" style={{height: '40px'}}></div>
      <div className="skeleton" style={{height: '40px', marginTop: '6px'}}></div>
    </div>
  )
}