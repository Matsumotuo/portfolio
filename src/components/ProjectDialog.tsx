import { useState } from 'react';
import { Button, Dialog, DialogTrigger, Modal, ModalOverlay, Heading } from 'react-aria-components';
import { X, ArrowUpRight } from 'lucide-react';

interface ProjectDialogProps {
  project: {
    id: number;
    title: string;
    imageUrl: string;
    link: string;
    description: string;
    images?: string[];
    behanceEmbed?: string;
  };
}

export function ProjectDialog({ project }: ProjectDialogProps) {
  const [isOpen, setOpen] = useState(false);

  return (
    <DialogTrigger isOpen={isOpen} onOpenChange={setOpen}>
      <Button id={`dialog-trigger-${project.id}`} className="group relative aspect-[4/3] rounded-3xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-background animate-fade-in-up block w-full text-left">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img
          src={project.imageUrl}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
          <div className="inline-flex items-center gap-2 text-sm text-white/70">
            Ver projeto <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </Button>
      <ModalOverlay
        className={({ isEntering, isExiting }) => `
          fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex min-h-full items-center justify-center p-4 text-center
          ${isEntering ? 'animate-in fade-in duration-300 ease-out' : ''}
          ${isExiting ? 'animate-out fade-out duration-200 ease-in' : ''}
        `}
      >
        <Modal
          className={({ isEntering, isExiting }) => `
            w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl bg-[#1a1a1a] text-left align-middle shadow-xl border border-white/10 flex flex-col
            ${isEntering ? 'animate-in zoom-in-95 ease-out duration-300' : ''}
            ${isExiting ? 'animate-out zoom-out-95 ease-in duration-200' : ''}
          `}
        >
          <Dialog className="outline-none flex flex-col min-h-0 h-[85vh] relative overflow-hidden">
            {({ close }) => (
              <>
                <Button
                  onPress={close}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white/70 hover:text-white transition-colors backdrop-blur-md border border-white/10 outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  <X className="w-5 h-5" />
                </Button>
                
                <div className={`${project.behanceEmbed ? 'p-0 overflow-hidden' : 'p-6 overflow-y-auto custom-scrollbar'} min-h-0 flex-1 flex flex-col`}>
                  {project.behanceEmbed ? (
                    <div 
                      className="w-full h-full bg-black relative z-30"
                      dangerouslySetInnerHTML={{ 
                        __html: project.behanceEmbed
                          .replace(/width="[^"]*"/, 'width="100%"')
                          .replace(/height="[^"]*"/, 'height="100%"') 
                      }}
                    />
                  ) : (
                    <div className="w-full flex-1 flex flex-col items-center">
                      <div className="w-full flex items-center justify-between pb-6 border-b border-white/10 shrink-0 mb-6 px-2">
                        <Heading slot="title" className="text-2xl font-semibold text-white">
                          {project.title}
                        </Heading>
                      </div>
                      
                      <div className="w-full space-y-6">
                        {project.images && project.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`${project.title} image ${idx + 1}`}
                            className="w-full h-auto rounded-xl object-contain bg-black/20"
                            loading="lazy"
                          />
                        ))}
                        
                        <div className="flex justify-center pt-8 pb-4">
                          <Button 
                            onPress={() => window.open(project.link, '_blank')}
                            className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full -z-10" />
                            Visualizar no Behance
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}
