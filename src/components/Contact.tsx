
import { Mail, Github, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Button, Form, Input, Label, TextField, TextArea } from 'react-aria-components';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] -z-10 mix-blend-screen animate-pulse" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Contact Info */}
        <div className="flex-1 space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Vamos trabalhar juntos?
            </h2>
            <p className="text-white/60 text-xl max-w-md">
              Seja para um novo projeto, dúvida ou apenas para dizer um oi, sinta-se à vontade para entrar em contato.
            </p>
          </div>

          <div className="space-y-6 pt-8 text-white/80">
            <a href="mailto:contato@exemplo.com" className="group flex items-center gap-4 hover:text-white transition-colors">
              <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-lg">contato@exemplo.com</span>
            </a>
            
            <div className="flex items-center gap-6 pt-8">
              <a href="#" className="text-white/50 hover:text-white hover:-translate-y-1 transition-all"><Github className="w-8 h-8" /></a>
              <a href="#" className="text-white/50 hover:text-white hover:-translate-y-1 transition-all"><Linkedin className="w-8 h-8" /></a>
              <a href="#" className="text-white/50 hover:text-white hover:-translate-y-1 transition-all"><Instagram className="w-8 h-8" /></a>
            </div>
          </div>
        </div>

        {/* Form using React Aria */}
        <div className="flex-1 glass-card p-8 md:p-12 animate-fade-in-up delay-100">
          <Form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Mensagem enviada com sucesso!"); }}>
            <div className="space-y-4">
              <TextField name="name" type="text" isRequired className="space-y-2">
                <Label className="text-sm font-medium text-white/80">Seu nome</Label>
                <Input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-sans" placeholder="Como devemos chamar você?" />
              </TextField>

              <TextField name="email" type="email" isRequired className="space-y-2">
                <Label className="text-sm font-medium text-white/80">Seu e-mail</Label>
                <Input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-sans" placeholder="Para retornarmos o contato" />
              </TextField>
              
              <TextField name="message" className="space-y-2">
                <Label className="text-sm font-medium text-white/80">Sua mensagem</Label>
                <TextArea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all min-h-[150px] font-sans" placeholder="Conte-nos sobre o seu projeto ou ideia..." />
              </TextField>
            </div>

            <Button type="submit" className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 overflow-hidden mt-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-purple-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              Enviar Mensagem
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
}
