import Toner from "./Toner";
import Emersion from "./Emersion";
import Lotion from "./Lotion";

import BBCream from "./BBCream";
import CCCream from "./CCCream";

// // ! PicasoToner + AquaToner
// let PicasoToner = new Toner("Picaso", "2021-01-01", 120);
// PicasoToner.printInfo();

// let AquaToner = new Toner("Aqua", "2021-02-07", 150, "cc");
// AquaToner.printInfo();
// AquaToner.setReviewPoint(3);

// // ! PicasoEmersion + AquaEmersion
// let PicasoEmersion = new Emersion("Picaso", "2021-01-01", 120);
// PicasoEmersion.printInfo();

// let AquaEmersion = new Emersion("Aqua", "2021-02-07", 150, "cc");
// AquaEmersion.printInfo();

// AquaEmersion.setReviewPoint(3);
// AquaEmersion.printInfo();

// // ! PicasoLotion
// let PicasoLotion = new Lotion("Picaso", "2021-03-03", 350, "cc");
// PicasoLotion.printInfo();

let PicasoBB = new BBCream("Picaso", "2021-04-01", 120, "LightBeige");
PicasoBB.setColor("LightBeige2021");
PicasoBB.printInfo();

let PicasoCC = new CCCream("Picaso", "2021-04-01", 120, "LightBeige");
PicasoCC.printInfo();
