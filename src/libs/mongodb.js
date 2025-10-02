import mongoose from 'mongoose'

export async function connectToDatabase() {
   try{
      await mongoose.connect('mongodb+srv://allan:1lGhKaEsJSIsqygi@cluster.g0kisst.mongodb.net/?retryWrites=true&w=majority&appName=Cluster')
      console.log('Conectado ao MongoDB')
   } catch(error){
      console.error('Erro ao conectar ao MongoDB:', error)
      throw new Error('Erro ao conectar ao banco de dados')
   }
}



const analyticsSchema = new mongoose.Schema({
   event: {type: String, required: true},
   analytics_user_id: {type: String, required: true},
   page: String,
   timestamp: Date,
   tag: String,
   texto: String,
   id: String,
   scrollPercent: Number,
   ip_address: String
}, {timestamps: true,})

export const Analytics = mongoose.models.Analytics || mongoose.model('Analytics', analyticsSchema)