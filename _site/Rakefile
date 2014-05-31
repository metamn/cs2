desc "Deploy to gh-pages"
task :deploy, :source do |t, args|
  
  source = args[:source] || ''
  if (source == '')
    puts "Usage: rake deploy[dev], or any source repository name"
    next
  end
  
  puts "\## Deploying to gh-pages"
  
  puts "\### Copying _site to tmp/"
  status = system("cp -Rf _site/* ~/tmp/_site")
  puts status ? "Success" : "Failed"
  
  puts "\### Pushing changes to the source repository"
  status = system("git add .")
  status = system("git add . -u")
  status = system("git commit -m 'Deploying ...'")
  puts status ? "Success" : "Failed"
  
  puts "\### Checking out gh-pages"
  status = system("git checkout gh-pages")
  puts status ? "Success" : "Failed"
  
  puts "\### Removing old files (except the .git/ folder)"
  status = system("ls | grep -v '.git' | xargs rm -Rf")
  puts status ? "Success" : "Failed"
  
  puts "\### Copying ~/tmp/_site into gh-pages"
  status = system("cp -Rf ~/tmp/_site/* .")
  puts status ? "Success" : "Failed"
  
  puts "\### Pushing back changes to github"
  status = system("git status")
  status = system("git add .")
  status = system("git add . -u")
  status = system("git commit -m 'Deploying ...'")
  puts status ? "Success" : "Failed"
  
  puts "\### Deploying... "
  status = system("git push origin gh-pages")
  puts status ? "Success" : "Failed"
  
  puts "\### Checking out the source repository"
  status = system("git checkout #{source}")
  puts status ? "Success" : "Failed"
end