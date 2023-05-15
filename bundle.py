from os import listdir, getcwd, remove, system
from os.path import isfile, join
import shutil

ignoredFiles = ['.git', 'bundle', 'bundle.py', '.gitignore', '.js']
bundleDirectory = getcwd() + '/bundle'

def isIgnored(path):
    for ignored in ignoredFiles:
        if path.endswith(ignored):
            return True
    return False

def readFilesWithPath(path):
    files = []
    for f in listdir(path):
        if isIgnored(f):
            continue
        completePath = join(path, f)
        if isfile(completePath):
            files.append(completePath)
        else:
            files.extend(readFilesWithPath(completePath))
    return files
            

def readFiles():
    currentDir = getcwd()
    return readFilesWithPath(currentDir)

def clearBundle():
    bundleFiles = listdir(bundleDirectory)
    for f in bundleFiles:
        remove(join(bundleDirectory, f))

def moveFilesToBundle(files):
    for f in files:
        shutil.copy(f, bundleDirectory)
    system('npx browserify main.js -o ' + join(bundleDirectory, 'bundle.js'))


if __name__ == '__main__':
    files = readFiles()
    clearBundle()
    moveFilesToBundle(files)
