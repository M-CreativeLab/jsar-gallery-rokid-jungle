const scene = spaceDocument.scene as BABYLON.Scene;

const model = scene.getNodeById('model');
/**
 * Because the model's name is in Chinese.
 */
const bolizhao = model.getChildMeshes().find(mesh => mesh.name === '玻璃罩');
if (bolizhao.material.getClassName() === 'PBRMaterial') {
  const mat = bolizhao.material as BABYLON.PBRMaterial;
  mat.alpha = 0.5;    /** change the alpha of 玻璃罩 */
}

model.getChildMeshes().forEach(mesh => {
  if (mesh.material.getClassName() === 'PBRMaterial') {
    const mat = mesh.material as BABYLON.PBRMaterial;
    mat.metallic = 0;
  }
});

const defaultAnim = scene.getAnimationGroupByName('animation0/#model');
defaultAnim.play(true);

