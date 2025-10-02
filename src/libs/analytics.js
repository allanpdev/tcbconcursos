import Cookies from 'js-cookie'

export function getAnalyticsId(){
   const cookieName = 'analytics_user_id'
   let userId = Cookies.get(cookieName)

   if(!userId){
      userId = crypto.randomUUID()
      Cookies.set(cookieName, userId, {
         expires: 365,
         path: '/',
         sameSite: 'Lax',
         secure: true,
      })
      console.log(`New user ID generated: ${userId}`)
   }

   return userId
}

export function logEvent(eventName, data = {}){
   const analytics_user_id = getAnalyticsId()

   const payload = {
      event: eventName,
      analytics_user_id: analytics_user_id,
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
      ...data,
   }

   fetch('/api/analytics', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload),
   })
}