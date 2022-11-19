import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { QuizModule} from './layouts/quiz/quiz.module'


platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
